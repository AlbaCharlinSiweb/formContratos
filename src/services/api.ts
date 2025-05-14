const API_URL_BASE = 'https://contratos.kitdigital.siwebcanarias.es'

interface ContractPayload {
  tax_id: string;
  product: string;
  campaign: string;
}

export const createContract = async (payload: ContractPayload): Promise<Response> => {
  const response = await fetch(`${API_URL_BASE}/api/create-contract`, {
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