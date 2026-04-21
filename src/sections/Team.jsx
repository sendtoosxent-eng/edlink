import { SparklesIcon } from "lucide-react";
import { useThemeContext } from "../context/ThemeContext";

export default function Team() {
    const { theme } = useThemeContext();
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <section className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-medium text-center mx-auto">Meet Our Team</h1>
                <p className="text-sm text-slate-500 text-center mt-2 max-w-xl mx-auto">Our diverse team of engineers, designers and innovators is dedicated to building tools that simplify work, accelerate growth and empower businesses worldwide. </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 mt-12">
                    <div className="flex flex-col items-center">
                        <img src="./assets/images.png" alt="User Image" className="size-20 aspect-square rounded-full" />
                        <h3 className="text-lg font-medium text-slate-700 text-center mt-2">Mularia Achileo</h3>
                        <p className="text-sm text-indigo-600 text-center">Founder & CEO</p>
                        <div className="flex items-center gap-2 text-slate-400 mt-2">
                            <a href="#" className="hover:-translate-y-0.5 hover:text-indigo-500 transition-all">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.335 3.333s-.584 1.75-1.667 2.834c1.333 8.333-7.833 14.416-15 9.666 1.833.083 3.667-.5 5-1.667-4.167-1.25-6.25-6.166-4.167-10 1.834 2.167 4.667 3.417 7.5 3.334-.75-3.5 3.334-5.5 5.834-3.167.916 0 2.5-1 2.5-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                            <a href="#" className="hover:-translate-y-0.5 hover:text-indigo-500 transition-all">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.332 6.667a5 5 0 0 1 5 5V17.5h-3.333v-5.834a1.667 1.667 0 0 0-3.334 0V17.5H8.332v-5.834a5 5 0 0 1 5-5M5.001 7.5H1.668v10h3.333zM3.335 5a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                            <a href="#" className="hover:-translate-y-0.5 hover:text-indigo-500 transition-all">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m18.335 5.834-7.493 4.772a1.67 1.67 0 0 1-1.674 0l-7.5-4.772" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16.668 3.334H3.335c-.92 0-1.667.746-1.667 1.666v10c0 .92.746 1.667 1.667 1.667h13.333c.92 0 1.667-.746 1.667-1.667V5c0-.92-.747-1.666-1.667-1.666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="./assets/images.png" alt="User Image" className="size-20 aspect-square rounded-full" />
                        <h3 className="text-lg font-medium text-slate-700 text-center mt-2">Oscar M Nsamba</h3>
                        <p className="text-sm text-indigo-600 text-center">Head of Development</p>
                        <div className="flex items-center gap-2 text-slate-400 mt-2">
                            <a href="#" className="hover:-translate-y-0.5 hover:text-indigo-500 transition-all">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.335 3.333s-.584 1.75-1.667 2.834c1.333 8.333-7.833 14.416-15 9.666 1.833.083 3.667-.5 5-1.667-4.167-1.25-6.25-6.166-4.167-10 1.834 2.167 4.667 3.417 7.5 3.334-.75-3.5 3.334-5.5 5.834-3.167.916 0 2.5-1 2.5-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                            <a href="#" className="hover:-translate-y-0.5 hover:text-indigo-500 transition-all">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.332 6.667a5 5 0 0 1 5 5V17.5h-3.333v-5.834a1.667 1.667 0 0 0-3.334 0V17.5H8.332v-5.834a5 5 0 0 1 5-5M5.001 7.5H1.668v10h3.333zM3.335 5a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                            <a href="#" className="hover:-translate-y-0.5 hover:text-indigo-500 transition-all">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m18.335 5.834-7.493 4.772a1.67 1.67 0 0 1-1.674 0l-7.5-4.772" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16.668 3.334H3.335c-.92 0-1.667.746-1.667 1.666v10c0 .92.746 1.667 1.667 1.667h13.333c.92 0 1.667-.746 1.667-1.667V5c0-.92-.747-1.666-1.667-1.666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="./assets/images.png" alt="User Image" className="size-20 aspect-square rounded-full" />
                        <h3 className="text-lg font-medium text-slate-700 text-center mt-2">Mubiru Gilbert</h3>
                        <p className="text-sm text-indigo-600 text-center">Full-Stack Developer</p>
                        <div className="flex items-center gap-2 text-slate-400 mt-2">
                            <a href="#" className="hover:-translate-y-0.5 hover:text-indigo-500 transition-all">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.335 3.333s-.584 1.75-1.667 2.834c1.333 8.333-7.833 14.416-15 9.666 1.833.083 3.667-.5 5-1.667-4.167-1.25-6.25-6.166-4.167-10 1.834 2.167 4.667 3.417 7.5 3.334-.75-3.5 3.334-5.5 5.834-3.167.916 0 2.5-1 2.5-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                            <a href="#" className="hover:-translate-y-0.5 hover:text-indigo-500 transition-all">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.332 6.667a5 5 0 0 1 5 5V17.5h-3.333v-5.834a1.667 1.667 0 0 0-3.334 0V17.5H8.332v-5.834a5 5 0 0 1 5-5M5.001 7.5H1.668v10h3.333zM3.335 5a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                            <a href="#" className="hover:-translate-y-0.5 hover:text-indigo-500 transition-all">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m18.335 5.834-7.493 4.772a1.67 1.67 0 0 1-1.674 0l-7.5-4.772" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16.668 3.334H3.335c-.92 0-1.667.746-1.667 1.666v10c0 .92.746 1.667 1.667 1.667h13.333c.92 0 1.667-.746 1.667-1.667V5c0-.92-.747-1.666-1.667-1.666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src=".assets/images.png" alt="User Image" className="size-20 aspect-square rounded-full" />
                        <h3 className="text-lg font-medium text-slate-700 text-center mt-2">Adellah N Gloria</h3>
                        <p className="text-sm text-indigo-600 text-center">PR & Graphics Designer</p>
                        <div className="flex items-center gap-2 text-slate-400 mt-2">
                            <a href="#" className="hover:-translate-y-0.5 hover:text-indigo-500 transition-all">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.335 3.333s-.584 1.75-1.667 2.834c1.333 8.333-7.833 14.416-15 9.666 1.833.083 3.667-.5 5-1.667-4.167-1.25-6.25-6.166-4.167-10 1.834 2.167 4.667 3.417 7.5 3.334-.75-3.5 3.334-5.5 5.834-3.167.916 0 2.5-1 2.5-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                            <a href="#" className="hover:-translate-y-0.5 hover:text-indigo-500 transition-all">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.332 6.667a5 5 0 0 1 5 5V17.5h-3.333v-5.834a1.667 1.667 0 0 0-3.334 0V17.5H8.332v-5.834a5 5 0 0 1 5-5M5.001 7.5H1.668v10h3.333zM3.335 5a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                            <a href="#" className="hover:-translate-y-0.5 hover:text-indigo-500 transition-all">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m18.335 5.834-7.493 4.772a1.67 1.67 0 0 1-1.674 0l-7.5-4.772" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16.668 3.334H3.335c-.92 0-1.667.746-1.667 1.666v10c0 .92.746 1.667 1.667 1.667h13.333c.92 0 1.667-.746 1.667-1.667V5c0-.92-.747-1.666-1.667-1.666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="./assets/images.png" alt="User Image" className="size-20 aspect-square rounded-full" />
                        <h3 className="text-lg font-medium text-slate-700 text-center mt-2">Cyrus Balikuddembe</h3>
                        <p className="text-sm text-indigo-600 text-center">Accountant</p>
                        <div className="flex items-center gap-2 text-slate-400 mt-2">
                            <a href="#" className="hover:-translate-y-0.5 hover:text-indigo-500 transition-all">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.335 3.333s-.584 1.75-1.667 2.834c1.333 8.333-7.833 14.416-15 9.666 1.833.083 3.667-.5 5-1.667-4.167-1.25-6.25-6.166-4.167-10 1.834 2.167 4.667 3.417 7.5 3.334-.75-3.5 3.334-5.5 5.834-3.167.916 0 2.5-1 2.5-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                            <a href="#" className="hover:-translate-y-0.5 hover:text-indigo-500 transition-all">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.332 6.667a5 5 0 0 1 5 5V17.5h-3.333v-5.834a1.667 1.667 0 0 0-3.334 0V17.5H8.332v-5.834a5 5 0 0 1 5-5M5.001 7.5H1.668v10h3.333zM3.335 5a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                            <a href="#" className="hover:-translate-y-0.5 hover:text-indigo-500 transition-all">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m18.335 5.834-7.493 4.772a1.67 1.67 0 0 1-1.674 0l-7.5-4.772" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16.668 3.334H3.335c-.92 0-1.667.746-1.667 1.666v10c0 .92.746 1.667 1.667 1.667h13.333c.92 0 1.667-.746 1.667-1.667V5c0-.92-.747-1.666-1.667-1.666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="./assets/images.png" alt="User Image" className="size-20 aspect-square rounded-full" />
                        <h3 className="text-lg font-medium text-slate-700 text-center mt-2">Jajja Musisi</h3>
                        <p className="text-sm text-indigo-600 text-center">Marketing Lead</p>
                        <div className="flex items-center gap-2 text-slate-400 mt-2">
                            <a href="#" className="hover:-translate-y-0.5 hover:text-indigo-500 transition-all">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.335 3.333s-.584 1.75-1.667 2.834c1.333 8.333-7.833 14.416-15 9.666 1.833.083 3.667-.5 5-1.667-4.167-1.25-6.25-6.166-4.167-10 1.834 2.167 4.667 3.417 7.5 3.334-.75-3.5 3.334-5.5 5.834-3.167.916 0 2.5-1 2.5-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                            <a href="#" className="hover:-translate-y-0.5 hover:text-indigo-500 transition-all">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.332 6.667a5 5 0 0 1 5 5V17.5h-3.333v-5.834a1.667 1.667 0 0 0-3.334 0V17.5H8.332v-5.834a5 5 0 0 1 5-5M5.001 7.5H1.668v10h3.333zM3.335 5a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                            <a href="#" className="hover:-translate-y-0.5 hover:text-indigo-500 transition-all">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m18.335 5.834-7.493 4.772a1.67 1.67 0 0 1-1.674 0l-7.5-4.772" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16.668 3.334H3.335c-.92 0-1.667.746-1.667 1.666v10c0 .92.746 1.667 1.667 1.667h13.333c.92 0 1.667-.746 1.667-1.667V5c0-.92-.747-1.666-1.667-1.666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};