const API_URL_BASE = 'http://contratos.kitdigital.siwebcanarias.es'

interface ContractPayload {
  tax_id: string;
  product: string;
  campaign: string;
  name: string;
  phone: string;
}

interface ContactPayload {
  name: string;
  cif: string;
  phone: number;
  option: string;
}

interface SendContactPayload {
  nombre: string;
  telefono: string;
  cif: string;
  contract: string;
}

interface CreateAndContractPayload {
  nombre: string;
  telefono: string;
  cif: string;
  contract: string;
  address: string;
  city: string;
  province: string;
  zipcode: string;
  mail: string;
  campaign_id: string;
}

export const createContract = async (payload: ContractPayload): Promise<Response> => {
  console.log('Contract Payload:', payload);
  const response = await fetch(`${API_URL_BASE}/create-contract`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response;
};

export const createContact = async (payload: ContactPayload): Promise<Response> => {
  const response = await fetch(`${API_URL_BASE}/create-contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response;
};

export const sendContact = async (payload: SendContactPayload): Promise<Response> => {
  const response = await fetch(`${API_URL_BASE}/send-contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response;
};

export const createAndContract = async (payload: CreateAndContractPayload): Promise<Response> => {
  console.log('Create and Contract Payload:', payload);
  const response = await fetch(`${API_URL_BASE}/create-and-contract`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response;
};

