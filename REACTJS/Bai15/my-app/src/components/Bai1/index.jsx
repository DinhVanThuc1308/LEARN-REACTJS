import { useForm } from "react-hook-form";
import "./MedicalDeclarationForm.css";

function MedicalDeclarationForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form className="medical-declaration-form" onSubmit={handleSubmit(onSubmit)}>
            <label>
                Tên:
                <input {...register("name", { required: true })} />
                {errors.name && <span className="error-message">Tên không được bỏ trống</span>}

            </label>
            <br />
            <label>
                Địa chỉ:
                <input {...register("address", { required: true })} />
                {errors.address && <span className="error-message">Địa chỉ không được bỏ trống</span>}
            </label>
            <br />

            <label>
                Số điện thoại:
                <input {...register("phone", { required: true, pattern: /^[0-9]*$/ })} />
                {errors.phone && <span className="error-message">Số điện thoại không được bỏ trống và phải là số</span>}
            </label>
            <br />
            <label>
                Email:
                <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.email && <span className="error-message">Email không được bỏ trống và phải đúng định dạng</span>}
            </label>
            <br />
            <label>
                Có triệu chứng gì trong vòng 14 ngày qua?
                <br />
                <input type="checkbox" {...register("symptom.fever")} />
                Sốt
                <input type="checkbox" {...register("symptom.cough")} />
                Ho
                <input type="checkbox" {...register("symptom.breath")} />
                Khó thở
            </label>
            <br />
            <button type="submit">Gửi</button>
        </form>
    );
}
export default MedicalDeclarationForm;