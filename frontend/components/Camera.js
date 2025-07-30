import React, { useState } from 'react';

const Camera = () => {
const [image, setImage] = useState(null);

const handleCapture = (event) => {
const file = event.target.files[0];
const reader = new FileReader();
reader.onload = (e) => setImage(e.target.result);
reader.readAsDataURL(file);
};

const handleSubmit = () => {
fetch('/api/allergy/detect', {
method: 'POST',
body: JSON.stringify({ image }),
headers: { 'Content-Type': 'application/json' },
})
.then(res => res.json())
.then(data => alert(`Allergy: ${data.allergy}`));
};

return (
<div>
<input type="file" accept="image/*" onChange={handleCapture} />
{image && <img src={image} alt="Captured" />}
<button onClick={handleSubmit}>Detect Allergy</button>
</div>
);
};

export default Camera;
