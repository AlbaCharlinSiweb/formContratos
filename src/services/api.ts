interface ContractPayload {
  tax_id: string;
  product: string;
}

const API_CONFIG = {
  BASE_URL: 'https://call.siwebonline.com/api/orders',
  AUTH_TOKEN: '3PW0QYGA5V9ZWR7CNA61MGSGME',
};

export const createContract = async (payload: ContractPayload): Promise<Response> => {
  const response = await fetch(`${API_CONFIG.BASE_URL}/create-contract-by-nif/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-AUTH-TOKEN': API_CONFIG.AUTH_TOKEN
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response;
};