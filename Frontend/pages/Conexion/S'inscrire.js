



export default function Contact() {
    return (
    <div>
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto ">
        <div class="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Créer un compte
            
            
              </p><div>
                <label class="block mb-2 text-sm font-medium text-gray-900">
                  Your username
                </label>
                <input placeholder="JohnDoe" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" id="username" type="text"/>
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="••••••••" id="password" type="password"/>
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900">
                  Confirm password
                </label>
                <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="••••••••" id="confirmPassword" type="password"/>
              </div>
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800" type="checkbox" aria-describedby="terms" id="terms"/>
                </div>
                <div class="ml-3 text-sm">
                  <label class="font-light text-gray-500 text-gray-300">
                    I accept the
                    <a href="#" class="font-medium text-primary-600 hover:underline text-primary-500">
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>

              <button class="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white" type="submit">
                Create an account
              </button>
            
          </div>
        </div>
      </div>
    
    </div>
    )
  }