## Testing API calls

### Check the response of the API call:

```javascript
it('should have sent a response that looks like...', async () => {
  // supertest `agent` will make the request...
  const response = await agent.get('/api/things');

  // check the response status:
  expect(response.status).to.equal(200);

  // check that a field exists on the response:
  expect(response.body.field).to.exist;

  // check the content of the response body:
  expect(response.body).to.have.length(5); // if body is an array
  expect(response.body.name).to.equal('bob'); // if body is an object

  // you might want to compare the API response with what's in the db:
  expect(response.body).to.have.length(stuffFromDb.length); // if comparing arrays
  expect(response.body[0].name).to.equal(stuffFromDb[0].name); // if comparing things inside the arrays
});
```

### Check React components:

```javascript
it('should have a component that looks like...', () => {
  // enzyme's `shallow` will make a component we can test...
  const wrapper = shallow(<Component props={props} />);

  // check if the wrapper has certain element(s) in it:
  expect(wrapper.find('div')).to.have.length(1);
  // (`find` returns an array with each of the elements it found
  // which could be 0 to many results)

  // check the text inside a specific element from `find`:
  expect(wrapper.find('div').at(0).text()).to.contain('hello');
});
```

