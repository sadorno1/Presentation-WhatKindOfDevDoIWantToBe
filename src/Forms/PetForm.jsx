import './PetForm.css';

function PetForm() {
  return (
    <div className="pet-form">
      <p>Do you like cats and/or dogs?</p>
    
      <span>
        <input type="checkbox" id="pet" name="pet" value="Cat" />
        <label htmlFor="pet">Cats 😻</label>
        </span>
        <span>
        <br />
        <input type="checkbox" id="pets" name="pets" value="Dog" />          
        <label htmlFor="pets">Dogs 🐶</label>
      </span>
    </div>
  );
}

export default PetForm;
