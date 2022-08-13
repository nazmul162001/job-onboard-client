import React from 'react';

const Pagination = ({ pageHandle, page, lastPage }) => {
    return (
        <div className='flex justify-center items-center pt-2 pb-2'>
            <div className="btn-group">
                {/* 
                
                1. WHEN PAGE NUMBER 1 IT HIDE 
                2. WHEN PAGE > 3 IT SHOW BUT 
                3. WHEN PAGE == 4 HIDE => THREE PAGE BUTTON. BECAUSE DOUBLE SHOW 3;
                4. WHEN PAGE > 5 => SHOW (.....) BUTTON. BECAUSE FOUR BUTTON HIDE INSTANTLY

             */}
                {
                    //  CASE: 01 AND 02
                    page > 3 &&
                    <>
                        <button
                            onClick={() => pageHandle(1)}
                            className="btn btn-sm btn-secondary btn-outline"
                        >
                            {1}
                        </button>

                        <button
                            onClick={() => pageHandle(2)}
                            className="btn btn-sm btn-secondary btn-outline"
                        >
                            {2}
                        </button>
                        {/* ********************* */}
                        {
                            // CASE: 03
                            page == 4 ||
                            <button
                                onClick={() => pageHandle(3)}
                                className="btn btn-sm btn-secondary btn-outline"
                            >
                                {3}
                            </button>
                        }
                        {/* ********************** */}
                        {
                            // CASE: 04
                            page > 5 &&
                            <button
                                className="btn btn-sm btn-disabled bg-info text-white font-extrabold"
                            >
                                ...
                            </button>
                        }
                    </>
                }
                {/* 

                    O5. WHEN PAGE > 1 => BUTTON SHOW (page - 1);

                */}

                {
                    // CASE: 05
                    page > 1 &&
                    <button
                        onClick={() => pageHandle(page - 1)}
                        className="btn btn-sm btn-secondary btn-outline"
                    >
                        {page - 1}
                    </button>
                }

                {/* *******CURRENT PAGE AND DISABLE BUTTON********** */}
                <button
                    className="btn btn-sm btn-disabled bg-info text-white"
                >
                    {page}
                </button>

                {/* 

                    06. WHEN PAGE == LAST PAGE OR PAGE == LAST PAGE -3 => FALSE THEN THIS BUTTON SHOW....

                */}
                {
                    //CASE: 06;
                    page == lastPage || page == lastPage - 3 ||
                    <>
                        <button
                            onClick={() => pageHandle(page + 1)}
                            className="btn btn-sm btn-secondary btn-outline"
                        >
                            {page + 1}
                        </button>

                        {/* 
                            07. WHEN PAGE >= LAST PAGE - 2 OR PAGE == LAST PAGE - 4 => FALSE THEN THIS BUTTON SHOW
                        
                        */}
                        {
                            //CASE: 07
                            page >= lastPage - 2 || page == lastPage - 4 ||
                            <button
                                className="btn btn-sm btn-disabled bg-info text-white font-extrabold"
                            >
                                ...
                            </button>
                        }
                    </>
                }

                {
                    page < lastPage - 2 &&
                    <>
                        <button
                            onClick={() => pageHandle(lastPage - 2)}
                            className="btn btn-sm btn-secondary btn-outline"
                        >
                            {lastPage - 2}
                        </button>
                        <button
                            onClick={() => pageHandle(lastPage - 1)}
                            className="btn btn-sm btn-secondary btn-outline"
                        >
                            {lastPage - 1}
                        </button>
                        <button
                            onClick={() => pageHandle(lastPage)}
                            className="btn btn-sm btn-secondary btn-outline"
                        >
                            {lastPage}
                        </button>

                    </>
                }
                {
                    lastPage - 2 == page &&
                    <button
                        onClick={() => pageHandle(lastPage)}
                        className="btn btn-sm btn-secondary btn-outline"
                    >
                        {lastPage}
                    </button>
                }
            </div>
        </div>
    );
};

export default Pagination;