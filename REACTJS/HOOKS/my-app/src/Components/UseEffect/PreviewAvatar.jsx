import React, { useEffect, useState } from "react";
function PreViewAvatar({ avatar }) {
    const [Avatar, setAvatar] = useState();

    useEffect(() => {
        //Clean up function
        return () => {
            Avatar && URL.revokeObjectURL(Avatar.preview);
        }
    }, [Avatar]);
    const handlePreViewAvatar = (e) => {
        const file = e.target.files[0];

        file.preview=URL.createObjectURL(file);
        setAvatar(file);
    }
  return (
    <div>
        <input
        type="file"
        onChange={handlePreViewAvatar}
        />
        {Avatar && 
        <img src={Avatar.preview} alt="" width="80%"
        />
   }   
   </div>
  );
}
export default PreViewAvatar;