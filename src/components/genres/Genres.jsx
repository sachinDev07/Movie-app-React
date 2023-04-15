import React from "react";
import { useSelector } from "react-redux";

import "./genres.scss";

const Genres = ({ id }) => {
    const { genres } = useSelector((state) => state.home);

    return (
        <div className="genres">
            {id?.map((g) => {
                if(!genres[g]?.name) return;
                return (
                    <div key={g} className="genre">
                        {genres[g]?.name}
                    </div>
                )
            })}
        </div>
    );
};

export default Genres;