import PageIndicator from "./PageIndicator/PageIndicator";


const PageIndicatorsList = (props) => {
    let pages = []; // And element of this array gets trapped inside a closure,
                    // it is the only reason why routing works.
                    // The first time, when closure was used intentionaly.
    let range = 10;

    // TODO: refactor setPagesRange

    const setPagesRange = () => {
        debugger;
        if (props.currentPage <= range - 1) {
            for (let i = 1; i<=range; i++){
                pages.push(i);
            }

            pages.push(0);
            pages.push(props.pagesCount);

        } else if ( (props.pagesCount - range/2 > props.currentPage) && (props.currentPage > range/2) ){
            debugger;
            pages.push(1);
            pages.push(0);

            for (let i = props.currentPage - range/2; i<=props.currentPage + range/2; i++){
                pages.push(i);
            }

            pages.push(0);
            pages.push(props.pagesCount);

        } else if (props.currentPage >= props.pagesCount - range + 1) {
            pages.push(1);
            pages.push(0);

            for (let i = props.pagesCount - range; i<=props.pagesCount; i++){
                pages.push(i);
            }
        }
        // if cp <= range/2
        //     start = 1 end = range
        //     
        // if  (pc - range/2) > cp >  range/2
        //     start = cp - range/2 end = cp + range/2
        // if cp >= (pc - range) / 2
    }

    // for (let i = 1; i<=props.pagesCount; i++){
    //     pages.push(i);
    // }
    setPagesRange();
    
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