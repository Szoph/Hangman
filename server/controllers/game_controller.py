import os
from flask import jsonify, request
import requests
from db_supabase import supabase
from utils import ApiResponse
from random import choice


class GameController:
    @staticmethod
    def test():
        # Handle login logic
        response = {'message': 'This is how to access the game routes'}
        return jsonify(response)
    
    @staticmethod
    def movie_external_api_call():
        print("Calling external API...")
        selected_genre = request.args.get('genre', default='action', type=str)
        print(f"Fetching movies for genre: {selected_genre}")
        url = 'https://moviesverse1.p.rapidapi.com/get-by-genre'
        headers = {
                  'X-RapidAPI-Key': os.environ.get("X_RAPIDAPI_KEY"),
                  'X-RapidAPI-Host': os.environ.get("X_RAPIDAPI_HOST")
        }
        params = {'genre': selected_genre}

        try:
            response = requests.get(url, headers=headers, params=params)
            response_json = response.json()
            movies = response_json.get('movies', [])

            print(movies)

            for movie in movies:

                try:
                    check_response, _ = supabase.table('movies').select("title").eq("title", movie['title']).single().execute()
                    print(f"Response after database check {check_response}")

                    print(check_response[0])

                    print(check_response[1])


                except Exception as error: 
                    movie_data = {
                    "title": movie['title'],
                    "genre": selected_genre,
                    "poster_image": movie.get('posterImage', ''),
                    "year": movie.get('year', ''),
                    "description": movie.get('description', ''),
                    "imdb_rating": movie.get('imdbRating', '').replace('\xa0', ' ').split(' ')[0]
                }   
                    
                    print(f"This is the movie data: {movie_data}")
                    save_response, _ = supabase.table('movies').insert(movie_data).execute()
                    print(f"This is the database response {save_response}")

            return ApiResponse(success=True, data="Movie added to database!")
            

            
        except requests.RequestException as error:
            print("This is an error?", error)
            return ApiResponse(success=False, data='Failed to fetch movies') 

    @staticmethod
    def get_movies_fromdb():
        print("Retrieving movies from database...")
        selected_genre = request.args.get('genre', default='action', type=str)
        print(f"Fetching movies for genre: {selected_genre}")

        try:
            response, _ = supabase.table('movies').select('title').eq('genre', selected_genre).execute()
            print("This is the response", response[1][0])

            # if _:
            #     print(f"Error querying the databse for genre")
            #     return jsonify({'error': 'Failed to fetch movies from the database'}), 500
            
            movies = response
            print("This is the response in movies", movies)
            if not movies:
                print(f"No movies found for genre: {selected_genre}")
                return jsonify({'message': 'No movies found for this genre'}), 404
            print(movies)
            return {'movies': movies}, 200
        except Exception as error:
            print(f"An unexpected error occured: {str(error)}")
            return jsonify({'error': 'An unexpected error occured'}), 500

