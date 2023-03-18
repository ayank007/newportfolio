const PageTransition = () => {
    return (
        <>
            <div className="page1"></div>
            <div className="page2">
                <div className="row1 row"></div>
                <div className="row2 row"></div>
                <div className="row3 row">
                    <div className="pageTransitionTxt">
                        <p>Ayan is thinking</p>
                        <div className="loadingDotsAnimation">
                            <span>.</span>
                            <span>.</span>
                            <span>.</span>
                        </div>
                    </div>
                </div>
                <div className="row4 row"></div>
                <div className="row5 row"></div>
            </div>
        </>
    )
}

export default PageTransition