import closeIcon from '../images/close.svg'

const InfoBox = ({ infoBoxOpen, toggleInfoBox, selectedAlgo }) => {
    return (
        <div className={`info-box ${infoBoxOpen ? 'visible' : 'hidden'}`} >
            <img className='close-info-icon' src={closeIcon} onClick={toggleInfoBox} />
            <h1>{selectedAlgo}</h1>
            SAmple text text text SAmple text text text SAmple text text text SAmple text text text SAmple text text text SAmple text text text SAmple text text text SAmple text text text SAmple text text text SAmple text text text SAmple text text text SAmple text text text SAmple text text text SAmple text text text SAmple text text text SAmple text text text SAmple text text text SAmple text text text SAmple text text text
        </div >
    )
}

export default InfoBox
