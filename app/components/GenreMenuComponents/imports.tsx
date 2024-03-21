import React from 'react';

import Action from '@/public/images/johnwick-action.jpg'
import War from '@/public/images/allquiet-war.jpg'
import Thriller from '@/public/images/godfather-thriller.jpg'
import SciFi from '@/public/images/interstellar-scifi.jpg'
import Adventure from '@/public/images/jumanji-adventure.jpg'
import Horror from '@/public/images/silenceofthelambs-horror.jpg'
import Mystery from '@/public/images/gonegirl-mystery.jpg'
import Comedy from '@/public/images/aceventura-comedy.jpg'


const WoodIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" 
        {...props}
        viewBox="0 0 512 512" id="wood-log">
        <path fill="#c36329" d="M430.032,160.022V419.081H81.982c-42.538,0-77.077-57.969-77.077-129.53S39.444,160.022,81.982,160.022H205.549C223.762,133.2,226.6,109.516,226.6,109.516h84.377a181.755,181.755,0,0,1-7.007,50.506Z"></path>
        <path fill="#f3bd69" d="M507.1,289.545c0,71.534-34.487,129.525-77.028,129.525s-77.029-57.991-77.029-129.525,34.487-129.526,77.029-129.526S507.1,218.01,507.1,289.545ZM268.789,92.919c-23.3,0-42.188,7.431-42.188,16.6s18.888,16.6,42.188,16.6,42.189-7.43,42.189-16.6S292.089,92.919,268.789,92.919Z"></path>
        <path fill="#3b294d" d="M488.746,195.451c-15.46-26.01-36.3-40.34-58.68-40.34-.35,0-.7,0-1.05.01H310.446a183.9,183.9,0,0,0,5.44-45.47v-.14a.86.86,0,0,0-.01-.16c-.17-14.01-23.77-21.34-47.09-21.34-23.09,0-46.48,7.19-47.06,20.95a.34.34,0,0,0-.01.1.277.277,0,0,0-.01.09v.01c-.33,2.2-3.11,19.27-14.92,39.68-1.17,2.02-2.46,4.12-3.88,6.28H81.986c-22.38,0-43.23,14.32-58.71,40.32C8.266,220.661,0,254.081,0,289.551s8.27,68.89,23.28,94.11c15.48,26,36.33,40.32,58.71,40.32h348.05a1.21,1.21,0,0,0,.19-.01c22.32-.07,43.1-14.38,58.52-40.33,15-25.21,23.25-58.63,23.25-94.1S503.746,220.661,488.746,195.451Zm-219.96-97.63c15.91,0,27.05,3.36,32.79,6.79,2.97,1.76,4.5,3.55,4.5,4.9s-1.53,3.14-4.5,4.91c-5.74,3.43-16.88,6.79-32.79,6.79s-27.04-3.36-32.78-6.79c-2.97-1.77-4.5-3.55-4.5-4.91s1.53-3.14,4.5-4.9C241.746,101.181,252.886,97.821,268.786,97.821Zm-186.8,316.35c-18.78,0-36.64-12.61-50.28-35.53-14.12-23.72-21.9-55.36-21.9-89.09s7.78-65.37,21.9-89.09c13.64-22.92,31.5-35.54,50.28-35.54h113.87c-13.37,17-34.44,35.7-67.09,48.61a4.9,4.9,0,0,0,1.8,9.46,5.042,5.042,0,0,0,1.81-.34c38.44-15.2,61.83-38.08,75.73-57.73,2.39-3.38,4.51-6.67,6.37-9.8q.54-.915,1.05-1.8a139.769,139.769,0,0,0,13.46-31.76c8.81,6.24,24.37,9.45,39.8,9.45,13.78,0,27.66-2.56,36.74-7.54a186.317,186.317,0,0,1-5.36,31.65c-.85,3.22-1.81,6.5-2.92,9.8-5.81,17.48-15.44,35.77-31.36,49.45a4.9,4.9,0,0,0,6.39,7.44c18.61-15.98,29.3-37.19,35.44-56.89h91.32c-10.29,6.83-19.68,17.13-27.65,30.53-14.99,25.21-23.25,58.63-23.25,94.09s8.26,68.89,23.25,94.1c7.97,13.4,17.36,23.69,27.65,30.53Zm398.33-35.54c-12.45,20.92-28.4,33.26-45.38,35.24a41.605,41.605,0,0,1-4.87.29,40.812,40.812,0,0,1-4.94-.3c-16.95-2.01-32.88-14.34-45.31-35.23-14.11-23.72-21.87-55.36-21.87-89.09s7.76-65.36,21.87-89.08c12.43-20.9,28.36-33.23,45.31-35.24a40.812,40.812,0,0,1,4.94-.3,41.605,41.605,0,0,1,4.87.29c16.98,1.98,32.93,14.32,45.38,35.25,14.11,23.72,21.88,55.35,21.88,89.08S494.426,354.911,480.316,378.631Zm6.35-89.09c0,24.09-5.63,46.81-15.83,63.97-9.57,16.08-22.17,25.69-35.9,27.53a35.893,35.893,0,0,1-4.87.33,4.905,4.905,0,0,1,0-9.81,25.668,25.668,0,0,0,4.87-.46c10.22-1.9,19.83-9.76,27.47-22.6,9.32-15.67,14.45-36.61,14.45-58.96a131.775,131.775,0,0,0-4.88-36.22,4.9,4.9,0,1,1,9.43-2.7A141.707,141.707,0,0,1,486.666,289.541Zm-56.6-82.01a26.413,26.413,0,0,0-4.94.47c-10.19,1.92-19.77,9.78-27.39,22.59-9.32,15.67-14.45,36.61-14.45,58.95a4.905,4.905,0,1,1-9.81,0c0-24.08,5.62-46.8,15.83-63.96,9.54-16.06,22.12-25.66,35.82-27.52a35.345,35.345,0,0,1,4.94-.34,4.9,4.9,0,0,1,4.87,4.34,4.081,4.081,0,0,1,0,1.14A4.9,4.9,0,0,1,430.066,207.531Zm-5.688,136.255a4.9,4.9,0,0,1-6.653,1.963c-12.388-6.743-21.42-23.024-24.163-43.549a4.9,4.9,0,0,1,9.722-1.3c2.3,17.175,9.625,31.059,19.131,36.233A4.9,4.9,0,0,1,424.378,343.786ZM198.772,378.113a4.9,4.9,0,0,1-4.9,4.9H54.655a4.9,4.9,0,0,1,0-9.808H193.868A4.9,4.9,0,0,1,198.772,378.113Zm144.982-35.425a4.9,4.9,0,0,1-4.9,4.9H248.013a4.9,4.9,0,1,1,0-9.809H338.85A4.9,4.9,0,0,1,343.754,342.688Zm-139.375,0a4.9,4.9,0,0,1-4.9,4.9h-38.12a4.9,4.9,0,0,1,0-9.809h38.12A4.9,4.9,0,0,1,204.379,342.688Zm-17.733-35.426a4.9,4.9,0,0,1,4.9-4.9h87.839a4.9,4.9,0,0,1,0,9.809H191.55A4.9,4.9,0,0,1,186.646,307.262Zm-112.934,4.9H29.792a4.9,4.9,0,0,1,0-9.809h43.92a4.9,4.9,0,0,1,0,9.809Zm-4.8-45.234H166.55a4.9,4.9,0,0,1,0,9.808H68.913a4.9,4.9,0,0,1,0-9.808Zm166.3,0a4.9,4.9,0,1,1,0,9.808H203.923a4.9,4.9,0,0,1,0-9.808Zm-40.645-30.52a4.9,4.9,0,0,1,4.9-4.9H338.688a4.9,4.9,0,0,1,0,9.808H199.475A4.9,4.9,0,0,1,194.571,236.413ZM48.784,200.988a4.9,4.9,0,0,1,4.905-4.905h43.94a4.9,4.9,0,1,1,0,9.809H53.689A4.9,4.9,0,0,1,48.784,200.988Zm254.755,0a4.9,4.9,0,0,1,4.9-4.905h30.245a4.9,4.9,0,0,1,0,9.809H308.443A4.9,4.9,0,0,1,303.539,200.988Z"></path>
        </svg>


    )
}


export { Action, War, Thriller, SciFi, Adventure, Horror, Mystery, Comedy, WoodIcon }


{/* <svg
{...props}
xmlns="http://www.w3.org/2000/svg"

data-name="Layer 1" 
viewBox="0 0 64 80" x="0px" y="0px">
<path d="M52.45,11.44l-.06-.06a1,1,0,0,0-1.39,0,1,1,0,0,0,0,1.44l.08.07a1,1,0,0,0,1.6-1.21A3,3,0,0,0,52.45,11.44Z"/>
<path d="M54.62,14.33a1,1,0,1,0-1.76.95,10.2,10.2,0,1,1-4.13-4.13,1,1,0,1,0,.95-1.76,12.28,12.28,0,0,0-14.42,2.11h0l-7.8,7.8a1,1,0,0,0,1.41,1.41l3.08-3.08s0,0,0,.07A12.3,12.3,0,0,0,31.74,19c0,.11,0,.21,0,.32,0,.35,0,.69,0,1,0,.15,0,.3,0,.45q0,.47.09.94c0,.15,0,.29.06.44.06.37.15.74.25,1.11,0,.07,0,.15.05.22a12.17,12.17,0,0,0,.46,1.28c0,.12.11.23.16.35.14.31.29.61.45.9l.24.41c.17.28.36.55.55.82l.26.35a11.21,11.21,0,0,0,2,2l.36.26c.27.19.53.38.81.55l.42.25c.29.16.58.31.87.44l.38.17a12.15,12.15,0,0,0,1.26.45l.29.07c.34.09.68.17,1,.23l.49.07q.43.06.87.09l.51,0h.25c.24,0,.48,0,.71,0l.38,0a12.28,12.28,0,0,0,1.32-.19h.07l-5.08,5.08h0l-4.61,4.61h0l-5,5A1,1,0,1,0,33,48.21l4.74-4.74H44.4a2.84,2.84,0,0,0,.93-5.52l-1.5-.52,8.68-8.68A12.29,12.29,0,0,0,54.62,14.33Zm-10,25.51a.84.84,0,0,1-.27,1.63H39.79L42.25,39Z"/>
<path d="M43.88,11.13a9,9,0,1,0,6.36,2.63A8.94,8.94,0,0,0,43.88,11.13Zm4.95,13.94a7,7,0,1,1,2-4.95A7,7,0,0,1,48.83,25.07Z"/>
<path d="M47.38,17.85a1,1,0,0,0,.8-1.6,2.51,2.51,0,0,0-.26-.28l-.06-.06a.93.93,0,0,0-1.35.06,1.08,1.08,0,0,0,.06,1.47A1,1,0,0,0,47.38,17.85Z"/>
<path d="M47.66,19.93a3.77,3.77,0,0,1-4,4,3.79,3.79,0,1,1,.39-7.57,1,1,0,0,0,.11-2A5.85,5.85,0,0,0,39.77,16a5.79,5.79,0,0,0,3.79,9.88h.35a5.77,5.77,0,0,0,5.75-6.09,1,1,0,1,0-2,.11Z"/>
<path d="M11,52l0,0h0l.46.48A12,12,0,0,0,18.65,56h.12a12.25,12.25,0,0,0,1.38.08,12.12,12.12,0,0,0,8.33-3.31,1,1,0,0,0-1.37-1.46,10.1,10.1,0,0,1-6,2.71l3-3a1,1,0,0,0-1.41-1.41l-4.27,4.27a10,10,0,0,1-5.27-2.6L23.4,41.07A1,1,0,0,0,22,39.66L11.83,49.82a10.26,10.26,0,0,1-.54-11l.34,3.75a1,1,0,0,0,1,.91h.09a1,1,0,0,0,.91-1.09L13,36h0l-.43-4.84.33.08.11,0a3.36,3.36,0,0,0,.54.05h.2l.38,0,.19,0a3.35,3.35,0,0,0,.52-.15l.15-.07a3.32,3.32,0,0,0,.38-.2l.15-.09a3.34,3.34,0,0,0,.47-.38l.06-.06.37.86v0l2,4.85a1,1,0,1,0,1.85-.77h0l9.88-9.88A1,1,0,0,0,28.79,24l-9.3,9.3L18.55,31l5.77-5.77a1,1,0,0,0-1.41-1.41L17.71,29l-.85-2h0a3.33,3.33,0,0,0-.37-.84v0l0-.05a3.19,3.19,0,0,0-.41-.5,3.35,3.35,0,0,0-5.66,1.71,3.15,3.15,0,0,0-.05.64l.05.6v0L11,35.77A12.26,12.26,0,0,0,11,52Zm1.32-24.27a1.38,1.38,0,0,1,.37-.68,1.35,1.35,0,0,1,1.91,0,1.22,1.22,0,0,1,.16.2l0,0a1.29,1.29,0,0,1,.16.38v0a1.47,1.47,0,0,1,0,.17A1.42,1.42,0,0,1,15,28a1.4,1.4,0,0,1,0,.27s0,0,0,.07a1.34,1.34,0,0,1-.08.18,1.32,1.32,0,0,1-.26.4,1.3,1.3,0,0,1-.33.22A1.39,1.39,0,0,1,12.71,29l-.06-.07a.82.82,0,0,1-.22-.36,1.26,1.26,0,0,1-.08-.21l0-.42A1.1,1.1,0,0,1,12.33,27.74Z"/>
<path d="M30,50.88a1,1,0,0,0,.69-.28l.23-.22a1,1,0,1,0-1.38-1.45l-.23.22A1,1,0,0,0,30,50.88Z"/>
<path d="M25.3,21.45l-.23.23a1,1,0,0,0,1.41,1.42l.23-.23a1,1,0,0,0-1.41-1.42Z"/>
<path d="M32.5,42.68l8.27-8.27A1,1,0,0,0,39.35,33l-8.27,8.27a1,1,0,1,0,1.41,1.41Z"/>
<path d="M16.94,51.87a1,1,0,0,0,1.41,0L33.42,36.81A1,1,0,1,0,32,35.39L16.94,50.45A1,1,0,0,0,16.94,51.87Z"/>
<path d="M27.95,36.52l4.19-4.19a1,1,0,0,0-1.41-1.41l-4.19,4.19a1,1,0,1,0,1.41,1.41Z"/>
<path d="M16.07,40.67l-4.45,4.45A1,1,0,1,0,13,46.54l4.45-4.45a1,1,0,0,0-1.41-1.41Z"/>
</svg> */}