import './styles.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, activeThumbnail} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`
    
  const onClickThumnail = () => {
    activeThumbnail(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button type = "button" className="thumbnail-button" onClick= {onClickThumnail}>
        <img src = {thumbnailUrl} alt = {thumbnailAltText} className={thumbnailClassName}/>
      </button>
    </li>
  )
}

export default ThumbnailItem
