import React from "react";
import { render } from "react-dom";
import { useForm } from "react-cool-form";
import "../../style.css";

function Enroll() {
    const { form, getState } = useForm({
        defaultValues: { name: "", email: "", password: "" },
        onSubmit: (values) => alert(JSON.stringify(values))
    });

    const errors = getState("errors");

    return (
    <div class="container">
        <form ref={form} noValidate>
            <h3>
                <span className="formName"></span>Candidate Info

            </h3>
            <div>
                <input name="name" placeholder="Name" required />
                {errors.name && <p>{errors.name}</p>}
            </div>

            <div>
                <input name="email" type="email" placeholder="Email" required />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <input
                    name="contactno"
                    type="contactno"
                    placeholder="Contact No"
                    pattern="[0-9]*"
                    required
                    minLength={10}
                />
                {errors.contactno && <p>{errors.contactno}</p>}
            </div>

            <input type="submit" />
            <input type="reset" />
        </form>
    </div>
    );
}

export default Enroll;
