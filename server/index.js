const movieTitles = async () => {
    // Make request movie API
    // Send the data from response to Supabase
}

// movieTitles(); 

const movies = () => {
    const response = apicall();
    const b = []

    for (const a of response) {
        const temp = {
            movie_name: a.original_title,
        }

        b.push(temp)
    }

    supabase.push(b);
}