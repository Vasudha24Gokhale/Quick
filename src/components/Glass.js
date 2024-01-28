import './Glass.css'
import { useState } from 'react'
import axios from 'axios'

function Glass() {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [subject, setSubject] = useState('')
  const [date, setDate] = useState('')
  // const [msc, setMsc] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const params = { title, text, subject, date }

    axios
      // .post('http://localhost:8080/prediction', params)
      .post('https://8000-genratecode-projectcoll-prh3u04eevd.ws-us101.gitpod.io/', params)
      .then((res) => {
        const data = res.data.data
        const parameters = JSON.stringify(params)
        const msg = `Prediction: ${data.prediction}\nInterpretation: ${data.interpretation}\nParameters: ${parameters}`
        alert(msg)
        reset()
      })
      .catch((error) => alert(`Error: ${error.message}`))
  }

  const reset = () => {
    setTitle('')
    setText('')
    setSubject('')
    setDate('')
    // setMsc('')
  }

  return (
    <div className="glass">
      <form onSubmit={(e) => handleSubmit(e)} className="glass__form">
        <h4>Employment Data</h4>
        <div className="glass__form__group">
          <input
            id="gender"
            className="glass__form__input"
            placeholder="Enter Title"
            required
            autoFocus
            // min="0"
            // max="1"
            // pattern="[0-9]{0,1}"
            // title="Gender must either be (1 = Male or 0 = Female)"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <input
            id="bsc"
            className="glass__form__input"
            placeholder="Enter Text"
            required
            // min="0"
            // max="5"
            type="text"
            // title="BSc CGPA must be in the range (1.00 - 5.00)"
            // pattern="[0-9]+([\.,][0-9]+)?"
            // step="0.01"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <input
            id="workex"
            className="glass__form__input"
            placeholder="Enter subject"
            required
            // min="0"
            // max="1"
            type="text"
            // title="Work Experience must either be (1 = True or 0 = False)"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <input
            id="etest_p"
            className="glass__form__input"
            placeholder="Enter date"
            required
            // min="0"
            // max="100"
            type="date"
            // title="E-Test score must be in the range (1.00 - 100)"
            // pattern="[0-9]+([\.,][0-9]+)?"
            // step="0.01"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* <div className="glass__form__group">
          <input
            id="msc"
            className="glass__form__input"
            placeholder="MSc CGPA (1.00 - 5.00)"
            required
            min="0"
            max="5"
            type="number"
            title="MSc CGPA must be in the range (1.00 - 5.00)"
            pattern="[0-9]+([\.,][0-9]+)?"
            step="0.01"
            value={msc}
            onChange={(e) => setMsc(e.target.value)}
          />
        </div> */}

        <div className="glass__form__group">
          <button type="submit" className="glass__form__btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Glass
