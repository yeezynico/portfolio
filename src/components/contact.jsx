import React from "react";

const Text = () => {
    return (
        <div>
            <form>
                <p>Vous souhaitez discuter avec moi,
                    que ce soit pour me proposer un poste ou pour passer le temps
                    pendant ce confinement ? Remplissez le formulaire ci-dessous,
                    je vous contacterai dès que je le peux.
                </p>

                <label for="fname">sujet:</label>
                <input type="text"></input>
                <textarea id="w3review" name="w3review" rows="4" cols="50">At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.</textarea>
                <br></br>
                <input type="submit" value="Submit"></input>
            </form>


        </div>
    )
};

export default Text;