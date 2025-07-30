import React, { useState } from 'react';

const AnonIDForm = () => {
const [name, setName] = useState('');

const handleSubmit = () => {
fetch('/api/anon_id/generate', {
method: 'POST',
body: JSON.stringify({ name }),
headers: { 'Content-Type': 'application/json', 'Authorization': 'token' },
})
.then(res => res.json())
.then(data => alert(`Anon ID: ${data.anonId}`));
};

return (
<div>
<input value={name} onChange={(e) => setName(e.target.value)} />
<button onClick={handleSubmit}>Generate Anon ID</button>
</div>
);
};

export default AnonIDForm;

