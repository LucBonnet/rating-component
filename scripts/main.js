function main() {
    const inputs = document.getElementsByName("rating");

    let rating = 0;

    function setRating(value) {
        if (value > inputs.length || value <= 0) {
            return;
        }

        rating = value;

        document.querySelector(".rating").classList.toggle("disabled");
        document.querySelector(".thank-message").classList.toggle("disabled");
        document.querySelector(".thank-message p.result").innerText =
            "You selected " + rating + " out " + inputs.length;
    }

    const btnSubmit = document.getElementById("btnSubmit");
    btnSubmit.onclick = (e) => {
        for (const input of inputs) {
            if (input.checked) {
                setRating(input.value);
                return;
            }
        }
    };
}

main();
