import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { CharacterType, getChars } from "../api/api";
import CardDisplay from "../components/CharacterCardDisplay/CardDisplay";
import './pages.scss'

type Props = {
    charsQuery: UseQueryResult<any, unknown>,
    changePage: (value:number) => void,
    currPage: number
}

const CharacterList = (({charsQuery, changePage, currPage}: Props) =>{

    if(charsQuery.isLoading) return <div>Loading..</div>;
    if(charsQuery.isError) return <div>Loading..</div>;

    const characters: CharacterType[] = charsQuery.data.results;
    const pagesMax = charsQuery.data.info.pages;

    const next = ((number:number) =>{
        if(currPage < pagesMax){ 
            return changePage(currPage+number);
        };
    });

    const prev = ((number:number) =>{
        if(currPage > 1){ 
            return changePage(currPage-number);
        };
    });


    return(
    <div>
        <div className="button__wrapper">
            <button onClick={(e) =>{
                e.preventDefault();
                prev(1)
            }}>
                    Prev
            </button>

            <button onClick={(e) =>{
                e.preventDefault();
                next(1)
            }}>
                    Next
            </button>
        </div>
        <CardDisplay characters={characters} />
    </div>
    )
})

export default CharacterList;