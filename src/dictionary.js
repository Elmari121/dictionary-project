
import React, { useState } from "react";
import "./dictionary.css"

export default function Dictionary() { 
    const [keyword, setKeyword] = useState(null);

    function search(event) {
        event.preventDefault();
        console.log("Searching for:", keyword); 
    }

    function handleKeyWordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeyWordChange} />
            </form>
        </div>
    );
}
