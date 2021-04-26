import React from "react";

export default function moviesearch(){
    
    return (
        <form className="form" >
            <label htmlFor="query" className="Label" >
                <input type="text" name="query" placeholder="i.e. Jurassic Park" ></input>
                <button type="submit" className="button" ></button>
            </label>
        </form>
    )
}

//to create the SearchMovies component
//form with a class of form
//label with htmlFor="query" and a class of Label
//input of type text with a name of "query" and a placeholder
//button class of button and a type of submit