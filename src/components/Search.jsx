import React, { useContext } from "react";
import './Search.css'
import AppContext from "../context/AppContext";

export default () => {


    const { setSearchTerm, searchTerm } = useContext(AppContext);


    return (
        <div className="search">
            <div className="bar-search">
                <div className="btn-search">
                    <button>
                        <svg width="20px" height="20px" viewBox="0 0 19 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <title>Shape@1,5x</title>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Guide" transform="translate(-90.000000, -634.000000)" fill="#FF0000" fill-rule="nonzero">
                                    <path d="M108.684286,651.201646 L104.024604,646.536351 C106.367461,643.486968 106.133175,639.082305 103.321746,636.293553 C101.785873,634.75583 99.8074606,634 97.8030161,634 C95.7985716,634 93.8201589,634.75583 92.2842858,636.293553 C89.2385714,639.342936 89.2385714,644.294925 92.2842858,647.344307 C93.8201589,648.88203 95.7985716,649.63786 97.8030161,649.63786 C99.4690479,649.63786 101.13508,649.116598 102.514762,648.048011 L107.200477,652.687243 C107.408731,652.895748 107.669048,653 107.955397,653 C108.215715,653 108.502064,652.895748 108.710318,652.687243 C109.100794,652.296296 109.100794,651.618656 108.684286,651.201646 Z M97.6496129,647.194444 C96.1557999,647.194444 94.7885811,646.612443 93.7251888,645.574962 C91.5730852,643.424087 91.5730852,639.906773 93.7251888,637.730594 C94.7632623,636.693113 96.1557999,636.111111 97.6496129,636.111111 C99.143426,636.111111 100.510645,636.693113 101.574037,637.730594 C102.637429,638.768075 103.194444,640.159817 103.194444,641.652778 C103.194444,643.145738 102.612111,644.512177 101.574037,645.574962 C100.535964,646.637747 99.1181071,647.194444 97.6496129,647.194444 Z" id="Shape"></path>
                                </g>
                            </g>
                        </svg>
                    </button>
                </div>
                <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} type="text" placeholder="Procure por heróis" />

            </div>

        </div>
    );

}