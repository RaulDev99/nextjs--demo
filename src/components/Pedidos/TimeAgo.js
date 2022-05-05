import useTimeAgo from "../../hooks/useTimeAgo";


export default function TimeAgo({timeAgo,className}){
    const timeago= useTimeAgo(timeAgo)
    
    return(
        <>
        <h1 className={className}> {timeago}</h1>
        </>
    )
}