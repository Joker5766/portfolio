import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const ProjectNavigation = ({ nextProject }) => {
    const navigate = useNavigate();

    if (!nextProject) return null;

    return (
        <section className="border-t border-white/10 bg-black py-16">
            <div className="mx-auto max-w-6xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center cursor-pointer group"
                    onClick={() =>
                        navigate(`/projects/${nextProject.id}`, { replace: true })
                    }
                >
                    <span className="mb-3 text-xs uppercase tracking-widest text-gray-500">
                        Next Project
                    </span>

                    <h2 className="text-3xl font-semibold text-white transition-colors group-hover:text-green-400 md:text-4xl">
                        {nextProject.title}
                    </h2>

                    <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition-all group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                        <FiArrowRight />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectNavigation;
