import { expect } from 'chai';
import Client from '../lib/client';

const apiKey = process.env.API_KEY;
const domain = process.env.DOMAIN;

describe('client', function () {
  this.timeout(10000);

  it('should instantiate a client', async () => {
    const freshsales = new Client({ apiKey, domain });
    // console.log(freshsales);
    expect(freshsales).to.be.an('object');
    const { data } = await freshsales.request({
      url: 'leads/filters'
    });
    expect(data.filters).to.be.an('array');
    expect(data.filters[0]).to.have.property('name');
    expect(data.filters[0]).to.have.property('model_class_name', 'Lead');
  });

});
