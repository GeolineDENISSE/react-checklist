import { useState } from 'react';

/**
 * Composant TaskList
 * Affiche une liste de tâches avec possibilité d'ajouter, modifier, supprimer et marquer comme terminée.
 */
export function TaskList() {
  // État pour la valeur du champ de saisie d'une nouvelle tâche
  const [task, setTask] = useState('');
  // État pour la liste des tâches (chaque tâche a un texte et un état "completed")
  const [tasks, setTasks] = useState([
    { text: "Lire le brief", completed: false },
    { text: "Installer vite et React", completed: false },
    { text: "Créer les composants", completed: false }
  ]);
  // État pour l'index de la tâche en cours d'édition (null si aucune)
  const [editIndex, setEditIndex] = useState(null);
  // État pour le texte temporaire lors de l'édition d'une tâche
  const [editText, setEditText] = useState('');

  /**
   * Ajoute une nouvelle tâche à la liste si le champ n'est pas vide.
   * Réinitialise le champ de saisie après ajout.
   */
  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  /**
   * Supprime la tâche à l'index donné.
   * @param {number} index - Index de la tâche à supprimer
   */
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  /**
   * Bascule l'état "terminée" d'une tâche.
   * @param {number} index - Index de la tâche à modifier
   */
  const toggleTask = (index) => {
    setTasks(tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    ));
  };

  /**
   * Prépare l'édition d'une tâche.
   * @param {number} index - Index de la tâche à éditer
   */
  const startEdit = (index) => {
    setEditIndex(index);
    setEditText(tasks[index].text);
  };

  /**
   * Valide la modification d'une tâche.
   * @param {number} index - Index de la tâche à modifier
   */
  const saveEdit = (index) => {
    setTasks(tasks.map((t, i) =>
      i === index ? { ...t, text: editText } : t
    ));
    setEditIndex(null);
    setEditText('');
  };

  /**
   * Annule l'édition en cours.
   */
  const cancelEdit = () => {
    setEditIndex(null);
    setEditText('');
  };

  return (
    <section className="task-list-section">
      <h2>Ma Liste de Tâches</h2>
      {/* Formulaire d'ajout de tâche */}
      <form onSubmit={addTask}>
        <input
          type="text"
          id="task"
          placeholder="Ajouter une nouvelle tâche..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>

      {/* Liste des tâches */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            {/* Case à cocher pour marquer comme terminée */}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />

            {/* Affichage du champ d'édition ou du texte de la tâche */}
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => saveEdit(index)}>Valider</button>
                <button onClick={cancelEdit}>Annuler</button>
              </>
            ) : (
              <>
                <span>{task.text}</span>
                <button onClick={() => startEdit(index)}>Modifier</button>
                <button onClick={() => deleteTask(index)}>Supprimer</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}