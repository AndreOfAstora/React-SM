import PageIndicator from "./PageIndicator/PageIndicator";


const PageIndicatorsList = (props) => {
    let pages = [];
    let range = 8;

    // TODO: refactor setPagesRange

    const appendPages = (start, end) => {
        for (let i = start; i <= end; i++){
            pages.push(i);
        }
    }

    const setPagesRange = () => {        

        if (props.currentPage < range) {
            appendPages(1, range);
            pages.push(0, props.pagesCount);

        }  else if (props.currentPage > props.pagesCount - range +1) {
            pages.push(1, 0);
            appendPages(props.pagesCount - range + 1, props.pagesCount);

        }  else {
            pages.push(1, 0);
            appendPages(
                Math.floor(props.currentPage - range/2 +0.5),
                Math.floor(props.currentPage + range/2 -0.5));
            
            pages.push(0, props.pagesCount);
        }
    }

    
    setPagesRange();
    
    return(
        <div>
            {JSON.stringify(props)}
            {pages.map(p =>                     
                    <PageIndicator
                        openPage={props.openPage} 
                        number={p}
                        active={(p === props.currentPage) ? true : false} />)}
        </div>
    )
}

export default PageIndicatorsList;