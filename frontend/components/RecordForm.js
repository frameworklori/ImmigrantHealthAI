import React, { useState } from 'react';

const RecordForm = () => {
const [data, setData] = useState('');

const handleSubmit = () => {
fetch('/api/record/save', {
method: 'POST',
body: JSON.stringify({ data }),
headers: { 'Content-Type': 'application/json', 'Authorization': 'token' },
})
.then(res => res.json())
.then(data => alert(`Record ID: ${data.recordId}`));
};

return (
<div>
<textarea value={data} onChange={(e) => setData(e.target.value)} />
<button onClick={handleSubmit}>Save Record</button>
</div>
);
};

export default RecordForm;

