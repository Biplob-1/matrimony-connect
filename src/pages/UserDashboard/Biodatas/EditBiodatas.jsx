import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Providers/AuthProvider';

const EditBiodatas = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors }, setError, reset } = useForm();

  useEffect(() => {
    reset({
      name: user?.displayName || '',
      contactEmail: user?.email || ''
    });
  }, [user, reset]);

  const onSubmit = (data) => {
    const today = new Date();
    const dob = new Date(data.dob);
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    if (age < 18) {
      setError("dob", {
        type: "manual",
        message: "You must be at least 18 years old",
      });
      return;
    }

    console.log(data);
  };

  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Edit Biodatas</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">Gender</label>
              <select {...register("type", { required: "Gender is required" })} id="type" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.type && <span className="text-red-600 text-sm">{errors.type.message}</span>}
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input {...register("name")} id="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" readOnly  value={user?.displayName}/>
              {errors.name && <span className="text-red-600 text-sm">{errors.name.message}</span>}
            </div>
            <div>
              <label htmlFor="profileImage" className="block text-sm font-medium text-gray-700">Profile Image</label>
              {/* <input {...register("profileImageUpload")} id="profileImageUpload" type="file" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" /> */}
              <input type="url" id="profileImage" name="profileImage" class="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder='URL'></input>
            </div>
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input {...register("dob", { required: "Date of Birth is required" })} id="dob" type="date" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
              {errors.dob && <span className="text-red-600 text-sm">{errors.dob.message}</span>}
            </div>
            <div>
              <label htmlFor="height" className="block text-sm font-medium text-gray-700">Height</label>
              <select {...register("height", { required: "Height is required" })} id="height" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                <option value="">Select</option>
                <option value="152.40">152.40 cm</option>
                <option value="154.94">154.94 cm</option>
                <option value="157.48">157.48 cm</option>
                <option value="160.02">160.02 cm</option>
                <option value="162.56">162.56 cm</option>
                <option value="165.10">165.10 cm</option>
                <option value="167.64">167.64 cm</option>
                <option value="170.18">170.18 cm</option>
                <option value="172.72">172.72 cm</option>
                <option value="175.26">175.26 cm</option>
                <option value="177.80">177.80 cm</option>
                <option value="180.34">180.34 cm</option>
                <option value="182.88">182.88 cm</option>
              </select>
              {errors.height && <span className="text-red-600 text-sm">{errors.height.message}</span>}
            </div>
            <div>
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight</label>
              <select {...register("weight", { required: "Weight is required" })} id="weight" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                <option value="">Select</option>
                <option value="45">45 kg</option>
                <option value="46">46 kg</option>
                <option value="47">47 kg</option>
                <option value="48">48 kg</option>
                <option value="49">49 kg</option>
                <option value="50">50 kg</option>
              </select>
              {errors.weight && <span className="text-red-600 text-sm">{errors.weight.message}</span>}
            </div>
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
              <input {...register("age", { required: "Age is required", valueAsNumber: true })} id="age" type="number" min={18} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
              {errors.age && <span className="text-red-600 text-sm">{errors.age.message}</span>}
            </div>
            <div>
              <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">Occupation</label>
              <select {...register("occupation", { required: "Occupation is required" })} id="occupation" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                <option value="">Select</option>
                <option value="Student">Student</option>
                <option value="Job">Job</option>
                <option value="House wife">House wife</option>
              </select>
              {errors.occupation && <span className="text-red-600 text-sm">{errors.occupation.message}</span>}
            </div>
            <div>
              <label htmlFor="race" className="block text-sm font-medium text-gray-700">Race</label>
              <select {...register("race", { required: "Race is required" })} id="race" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                <option value="">Select</option>
                <option value="islam">Islam</option>
                <option value="hindu">Hindu</option>
                <option value="christian">Christian</option>
                <option value="buddhist">Buddhist</option>
              </select>
              {errors.race && <span className="text-red-600 text-sm">{errors.race.message}</span>}
            </div>
            <div>
              <label htmlFor="fathersName" className="block text-sm font-medium text-gray-700">Father's Name</label>
              <input {...register("fathersName", { required: "Father's Name is required" })} id="fathersName" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
              {errors.fathersName && <span className="text-red-600 text-sm">{errors.fathersName.message}</span>}
            </div>
            <div>
              <label htmlFor="mothersName" className="block text-sm font-medium text-gray-700">Mother's Name</label>
              <input {...register("mothersName", { required: "Mother's Name is required" })} id="mothersName" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
              {errors.mothersName && <span className="text-red-600 text-sm">{errors.mothersName.message}</span>}
            </div>
            <div>
              <label htmlFor="permanentDivision" className="block text-sm font-medium text-gray-700">Permanent Division</label>
              <select {...register("permanentDivision", { required: "Permanent Division is required" })} id="permanentDivision" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                <option value="">Select</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chattagram">Chattagram</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Barisal">Barisal</option>
                <option value="Khulna">Khulna</option>
                <option value="Maymansign">Maymansign</option>
                <option value="Sylhet">Sylhet</option>
              </select>
              {errors.permanentDivision && <span className="text-red-600 text-sm">{errors.permanentDivision.message}</span>}
            </div>
            <div>
              <label htmlFor="presentDivision" className="block text-sm font-medium text-gray-700">Present Division</label>
              <select {...register("presentDivision", { required: "Present Division is required" })} id="presentDivision" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                <option value="">Select</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chattagram">Chattagram</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Barisal">Barisal</option>
                <option value="Khulna">Khulna</option>
                <option value="Maymansign">Maymansign</option>
                <option value="Sylhet">Sylhet</option>
              </select>
              {errors.presentDivision && <span className="text-red-600 text-sm">{errors.presentDivision.message}</span>}
            </div>
            <div>
              <label htmlFor="expectedPartnerAge" className="block text-sm font-medium text-gray-700">Expected Partner Age</label>
              <input {...register("expectedPartnerAge", { valueAsNumber: true })} id="expectedPartnerAge" type="number" min={18} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label htmlFor="expectedPartnerHeight" className="block text-sm font-medium text-gray-700">Expected Partner Height</label>
              <select {...register("expectedPartnerHeight")} id="expectedPartnerHeight" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                <option value="">Select</option>
                <option value="152.40">152.40 cm</option>
                <option value="154.94">154.94 cm</option>
                <option value="157.48">157.48 cm</option>
                <option value="160.02">160.02 cm</option>
                <option value="162.56">162.56 cm</option>
                <option value="165.10">165.10 cm</option>
                <option value="167.64">167.64 cm</option>
                <option value="170.18">170.18 cm</option>
                <option value="172.72">172.72 cm</option>
                <option value="175.26">175.26 cm</option>
                <option value="177.80">177.80 cm</option>
                <option value="180.34">180.34 cm</option>
                <option value="182.88">182.88 cm</option>
              </select>
            </div>
            <div>
              <label htmlFor="expectedPartnerWeight" className="block text-sm font-medium text-gray-700">Expected Partner Weight</label>
              <select {...register("expectedPartnerWeight")} id="expectedPartnerWeight" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                <option value="">Select</option>
                <option value="45">45 kg</option>
                <option value="46">46 kg</option>
                <option value="47">47 kg</option>
                <option value="48">48 kg</option>
                <option value="49">49 kg</option>
                <option value="50">50 kg</option>
              </select>
            </div>
            <div>
              <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">Contact Email</label>
              <input {...register("contactEmail")} id="contactEmail" type="email" readOnly value={user?.email} className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed" />
            </div>
            <div>
              <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
              <input {...register("mobileNumber", { required: "Mobile Number is required" })} id="mobileNumber" type="tel" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
              {errors.mobileNumber && <span className="text-red-600 text-sm">{errors.mobileNumber.message}</span>}
            </div>
          </div>
          <div className="text-right">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBiodatas;
