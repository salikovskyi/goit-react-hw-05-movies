import { useEffect, useState } from "react";
import moviesApi from '../../services/fetchApi'
import css from './Reviews.module.css'


const Reviews = ({id}) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getReview = async () => {
            const {data} = await moviesApi.getMovieReviews(id);
      
            setReviews(data.results)
    console.log(data)
        }
        getReview()
    },[id]);

    const element = reviews.map(({id, author, content}) => (
        <li key={id} className={css.item}>
            <h2 className={css.author}>Author: {author}</h2>
            <p className={css.content}>{content}</p>
        </li>
    ))
    return(
        <div>
            {reviews?.length > 0 ? (<ul className={css.list}>
                {reviews && element}
            </ul>) : (<p>НИЧЕГО НЕТ БРАТАН(прочитать с армянским акцентом)</p>)}
            
        </div>
    )
}

export default Reviews;