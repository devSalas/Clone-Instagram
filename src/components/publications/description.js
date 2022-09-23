import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import PublicationForm from './publicationForm';
export default function Description({like,comment}){
  return(
    <>
      <div className='flex'>
        <div className='flex'>
          <FavoriteIcon/>
          <ChatBubbleOutlineOutlinedIcon/>
          <SendIcon/>  
        </div>
        <BookmarkBorderRoundedIcon/>
      </div>

      <div>{like || 0}likes</div>
      <div>{}HOURS AGO</div>
      <div>
        {comment}
      </div>
      <PublicationForm/>
      
    </>
  )
}