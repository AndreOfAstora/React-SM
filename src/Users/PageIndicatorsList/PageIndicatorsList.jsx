import PageIndicator from "./PageIndicator/PageIndicator";


const PageIndicatorsList = (props) => {
    let pages = []; // And element of this array gets trapped inside a closure,
                    // it is the only reason why routing works.
                    // The first time, when closure was used intentionaly.

    for (let i = 1; i<=props.pagesCount; i++){
        pages.push(i);
    }
    
    return(
        <div>
            {JSON.stringify(props)}
            {pages.map(p =>                     
                    <PageIndicator
                        openPage={props.openPage} // Arrow function preserves   this, and array element p gets 
                                                  // trapped inside the closure, when props.openPage is called 
                                                  // inside PageIndicator component. 
                                                  // UPD: ignore the above, page indicator calls openPage like this: openPage(props.number), so closure is not done like it was said above.
                                                  // TODO: Investigate necessity of passing p via arrow function into openPage.
                        number={p}
                        active={(p === props.currentPage) ? true : false} />)}
        </div>
    )
}

export default PageIndicatorsList;