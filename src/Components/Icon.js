import Lock from '@material-ui/icons/Lock';
import PhoneIcon from '@material-ui/icons/Phone';
import ContactsIcon from '@material-ui/icons/Contacts';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import BookmarkIcon from '@material-ui/icons/Bookmark';

const Icon = (props) => {
    return (
        <div className={`icon-container ${props.position}`}>
            {props.iconName === "lock" && <Lock/>}
            {props.iconName === "phoneIcon" && <PhoneIcon/>}
            {props.iconName === "contacts" && <ContactsIcon/>}
            {props.iconName === "location" && <MyLocationIcon/>}
            {props.iconName === "bookmark" && <BookmarkIcon/>}
        </div>
    )
}

export default Icon;