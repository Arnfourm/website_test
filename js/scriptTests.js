function Start() {
    document.getElementById('instruction').style.display = 'none';
    document.getElementById('test').style.display = 'block';
    document.body.style.overflow = 'auto';
}

function GoBack(){
    window.history.back();
}

function Reset(){
    history.go(0);
}

function CountResult() {
    let score = 0;
    let maxScore = 0;
    let correctAnswers = [];

    let variantAnswers = document.querySelectorAll("input");
    for (let i = 0; i < variantAnswers.length; i++) {
        let variant = variantAnswers[i];
        let label = variant.parentElement;

        if (variant.value === "1") {
            maxScore += 1;
            correctAnswers.push(label.textContent.trim()); 
            if (!variant.checked) {
                label.style.backgroundColor = "#f8d7da"; 
                label.style.border = "1px solid #f5c6cb";
            } else {
                score += 1;
                label.style.backgroundColor = "#d4edda"; 
                label.style.border = "1px solid #c3e6cb";
            }
        }

        if (variant.checked && variant.value !== "1") {
            label.style.backgroundColor = "#f8d7da";
            label.style.border = "1px solid #f5c6cb";
        }

        variant.disabled = true;
    }

    alert(`Ваш результат: ${score} из ${maxScore}`);
}