import ReactPaginate from "react-paginate";

function Pagination({ exercisePerPage, totalExercises, setPage }) {
    const pageCount = Math.ceil(totalExercises / exercisePerPage);

    function handlePageChange(data) {
        const pageNumber = data.selected;
        setPage(pageNumber + 1);
    }

    return (
        <div className="box-border flex justify-center items-center">
            <div className="pagination-container box-border bg-white w-fit my-8 py-2 rounded-md">
                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'. . .'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={2}
                    onPageChange={handlePageChange}
                    containerClassName={'pagination flex'}
                    pageClassName={'page-item text-sm ml-2'}
                    pageLinkClassName={'page-link w-6 h-6 flex justify-center items-center rounded-md hover:bg-[#e0d3d6] md:w-8 md:h-8'}
                    previousClassName={'prev text-sm ml-4 mr-2'}
                    previousLinkClassName={'w-6 h-6 flex justify-center items-center rounded-md hover:bg-[#e0d3d6] md:w-8 md:h-8'}
                    nextClassName={'next text-sm mx-4'}
                    nextLinkClassName={'w-6 h-6 flex justify-center items-center rounded-md hover:bg-[#e0d3d6] md:w-8 md:h-8'}
                    breakClassName={'break text-sm'}
                    breakLinkClassName={'w-6 h-6 flex justify-center items-center rounded-md'}
                    activeLinkClassName={'bg-[#FF2625] hover:bg-[#FF2625] text-white cursor-default'}
                    disabledLinkClassName={'text-[#e0d3d6] hover:bg-white cursor-default'}
                />
            </div>
        </div>
    )
}

export default Pagination;