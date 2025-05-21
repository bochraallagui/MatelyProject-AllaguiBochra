

const BASE_URL = 'http://192.168.100.5:5000'; //  IP locale

// Fonction pour charger les tâches
export const fetchTasksAfter = async (date) => {
  const res = await fetch(`${BASE_URL}/tasks?after=${date.toISOString()}`);
  const data = await res.json();
  return data;
};

// Fonction pour simuler l’ajout de tâches
export const simulateTasks = async () => {
  try {
    const res = await fetch(`${BASE_URL}/tasks/simulate`, {
      method: 'POST',
    });
    return await res.text(); 
  } catch (error) {
    console.error('Erreur simulation:', error);
  }
};
