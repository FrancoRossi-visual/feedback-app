import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

export default function FeedbackForm () {

  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')


  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true)
      setMessage('text must be at least 10 characters :(')
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }

    setText(e.target.value)
  }

  return (
    <Card>
      <form>
      <h2>How would you rate your service with us?</h2>
      <RatingSelect select={(rating) => setRating(rating)}/>
      <div className="input-group">

        <input onChange={handleTextChange}
        value={text} type="text" name="review" id="review" placeholder="Write a review <3" />
        <Button type="submit" isDisabled={btnDisabled}>
          Send
        </Button>
      </div>

      {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}