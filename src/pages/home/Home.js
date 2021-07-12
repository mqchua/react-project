import { React, useState } from 'react';
import { FormControl, Button, FormHelperText, Input, InputLabel, TextField } from '@material-ui/core';
import '@fontsource/roboto';

export default function App() {

    const[name, setName] = useState('');
    const[price, setPrice] = useState('');

    return (
      <FormControl>

      <TextField required id="name" label="Product Name" value={name} onChange={(e) => setName(e.target.value)}/>
      <TextField required id="price" label="Price" value={price} onChange={(e) => setPrice(e.target.value)}/>

        <Button type="submit">Submit</Button>
        <p> {name} </p>
        <p> {price} </p>
      </FormControl>

    );
}
