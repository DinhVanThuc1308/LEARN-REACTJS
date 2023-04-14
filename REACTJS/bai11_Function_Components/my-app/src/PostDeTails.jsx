import { useParams } from "react-router-dom";

const PostDetails = () => {
    const params = useParams();
    const contactID = params.contactId;

    return (
        <div>
            id = {contactID}
        </div>
    )
}
export default PostDetails;