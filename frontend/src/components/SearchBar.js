import React from "react";
import "./SearchBar.css";

export default function SearchBar(props){
    return (
        <form>
        <div className="search-bar">
            <div className="search-icon">
                <img 
                    src={process.env.PUBLIC_URL+"/fi-rs-search.svg"}
                    alt="SearchIcon"
                ></img>
            </div>
            <input
                    type="search"
                    id="search"
                    className="search-input"
                    placeholder="Search for a Lesson"
                    onChange={props.onChange}
            />
        </div>
        </form>
        
    )
}