'use client'
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextArea,
    TextField,
} from "@heroui/react";
import { motion } from 'framer-motion';
import { ListBox, Select } from "@heroui/react";

const AddTutorFrom = () => {
    return (
        <div>
            <section className="min-h-screen py-12 px-4 bg-[#F0F7FF] dark:bg-[#0A0F1C] transition-colors duration-300">
    <div className="max-w-4xl mx-auto">

        {/* HEADING */}
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
        >
            <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-3">
                Add New Tutor
            </h1>
            <p className="text-blue-900/60 dark:text-blue-100/40 max-w-lg mx-auto text-base font-medium">
                Fill in the details to list a professional tutor profile.
            </p>
        </motion.div>

        {/* FORM CARD */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-[#111827] rounded-[2rem] shadow-[0_15px_50px_rgba(37,99,235,0.08)] border border-blue-50 dark:border-blue-900/30 p-6 md:p-10"
        >
            <Form className="w-full flex flex-col gap-6">

                {/* GRID SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {/* 1. TUTOR NAME */}
                    <TextField isRequired name="tutorName" className="flex flex-col gap-1.5">
                        <Label className="text-xs font-bold text-blue-900 dark:text-blue-100/80 tracking-widest uppercase px-1">Tutor Name</Label>
                        <Input
                            placeholder="Enter full name"
                            className="w-full h-12 px-5 rounded-xl border-2 border-blue-50 dark:border-blue-900/20 bg-blue-50/30 dark:bg-blue-900/10 focus:bg-white dark:focus:bg-[#161e2c] focus:border-blue-500 transition-all outline-none text-blue-900 dark:text-blue-50"
                        />
                        <FieldError className="text-red-500 dark:text-red-400 text-[11px] font-medium mt-1 ml-1" />
                    </TextField>

                    {/* 2. PHOTO */}
                    <TextField isRequired name="photo" className="flex flex-col gap-1.5">
                        <Label className="text-xs font-bold text-blue-900 dark:text-blue-100/80 tracking-widest uppercase px-1">Photo URL</Label>
                        <Input
                            placeholder="https://i.ibb.co/example.jpg"
                            className="w-full h-12 px-5 rounded-xl border-2 border-blue-50 dark:border-blue-900/20 bg-blue-50/30 dark:bg-blue-900/10 focus:bg-white dark:focus:bg-[#161e2c] focus:border-blue-500 transition-all outline-none text-blue-900 dark:text-blue-50"
                        />
                        <FieldError className="text-red-500 dark:text-red-400 text-[11px] font-medium mt-1 ml-1" />
                    </TextField>

                    {/* 3. SUBJECT / CATEGORY */}
                    <Select isRequired name="subject" className="flex flex-col gap-1.5">
                        <Label className="text-xs font-bold text-blue-900 dark:text-blue-100/80 tracking-widest uppercase px-1">Subject / Category</Label>
                        <Select.Trigger className="w-full h-12 px-5 rounded-xl border-2 border-blue-50 dark:border-blue-900/20 bg-blue-50/30 dark:bg-blue-900/10 text-left text-blue-900 dark:text-blue-50 outline-none focus:border-blue-500">
                            <Select.Value />
                        </Select.Trigger>
                        <Select.Popover className="dark:bg-[#111827] dark:border-blue-900/50">
                            <ListBox className="dark:text-blue-50">
                                {['Mathematics', 'Physics', 'Chemistry', 'ICT', 'Biology', 'English'].map(sub => (
                                    <ListBox.Item key={sub} id={sub} textValue={sub} className="px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/30 cursor-pointer outline-none">{sub}</ListBox.Item>
                                ))}
                            </ListBox>
                        </Select.Popover>
                        <FieldError className="text-red-500 dark:text-red-400 text-[11px] font-medium mt-1 ml-1" />
                    </Select>

                    {/* 4. TEACHING MODE */}
                    <Select isRequired name="teachingMode" className="flex flex-col gap-1.5">
                        <Label className="text-xs font-bold text-blue-900 dark:text-blue-100/80 tracking-widest uppercase px-1">Teaching Mode</Label>
                        <Select.Trigger className="w-full h-12 px-5 rounded-xl border-2 border-blue-50 dark:border-blue-900/20 bg-blue-50/30 dark:bg-blue-900/10 text-left text-blue-900 dark:text-blue-50 outline-none focus:border-blue-500">
                            <Select.Value />
                        </Select.Trigger>
                        <Select.Popover className="dark:bg-[#111827] dark:border-blue-900/50">
                            <ListBox className="dark:text-blue-50">
                                {['Online', 'Offline', 'Both'].map(mode => (
                                    <ListBox.Item key={mode} id={mode} textValue={mode} className="px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/30 cursor-pointer outline-none">{mode}</ListBox.Item>
                                ))}
                            </ListBox>
                        </Select.Popover>
                        <FieldError className="text-red-500 dark:text-red-400 text-[11px] font-medium mt-1 ml-1" />
                    </Select>

                    {/* 5. AVAILABLE DAYS */}
                    <TextField isRequired name="availableDays" className="flex flex-col gap-1.5">
                        <Label className="text-xs font-bold text-blue-900 dark:text-blue-100/80 tracking-widest uppercase px-1">Available Days</Label>
                        <Input placeholder="e.g. Sun - Thu" className="w-full h-12 px-5 rounded-xl border-2 border-blue-50 dark:border-blue-900/20 bg-blue-50/30 dark:bg-blue-900/10 focus:bg-white dark:focus:bg-[#161e2c] focus:border-blue-500 transition-all outline-none text-blue-900 dark:text-blue-50" />
                        <FieldError className="text-red-500 dark:text-red-400 text-[11px] font-medium mt-1 ml-1" />
                    </TextField>

                    {/* 6. AVAILABLE TIME SLOT */}
                    <TextField isRequired name="availableTime" className="flex flex-col gap-1.5">
                        <Label className="text-xs font-bold text-blue-900 dark:text-blue-100/80 tracking-widest uppercase px-1">Available Time Slot</Label>
                        <Input placeholder="e.g. 5:00 PM - 8:00 PM" className="w-full h-12 px-5 rounded-xl border-2 border-blue-50 dark:border-blue-900/20 bg-blue-50/30 dark:bg-blue-900/10 focus:bg-white dark:focus:bg-[#161e2c] focus:border-blue-500 transition-all outline-none text-blue-900 dark:text-blue-50" />
                        <FieldError className="text-red-500 dark:text-red-400 text-[11px] font-medium mt-1 ml-1" />
                    </TextField>

                    {/* 7. HOURLY FEE */}
                    <TextField isRequired name="hourlyFee" className="flex flex-col gap-1.5">
                        <Label className="text-xs font-bold text-blue-900 dark:text-blue-100/80 tracking-widest uppercase px-1">Hourly Fee ($)</Label>
                        <Input type="number" placeholder="Enter fee" className="w-full h-12 px-5 rounded-xl border-2 border-blue-50 dark:border-blue-900/20 bg-blue-50/30 dark:bg-blue-900/10 focus:bg-white dark:focus:bg-[#161e2c] focus:border-blue-500 transition-all outline-none text-blue-900 dark:text-blue-50" />
                        <FieldError className="text-red-500 dark:text-red-400 text-[11px] font-medium mt-1 ml-1" />
                    </TextField>

                    {/* 8. TOTAL SLOT */}
                    <TextField isRequired name="totalSlot" className="flex flex-col gap-1.5">
                        <Label className="text-xs font-bold text-blue-900 dark:text-blue-100/80 tracking-widest uppercase px-1">Total Slot</Label>
                        <Input type="number" placeholder="Enter total slots" className="w-full h-12 px-5 rounded-xl border-2 border-blue-50 dark:border-blue-900/20 bg-blue-50/30 dark:bg-blue-900/10 focus:bg-white dark:focus:bg-[#161e2c] focus:border-blue-500 transition-all outline-none text-blue-900 dark:text-blue-50" />
                        <FieldError className="text-red-500 dark:text-red-400 text-[11px] font-medium mt-1 ml-1" />
                    </TextField>

                    {/* 9. SESSION START DATE */}
                    <TextField isRequired name="sessionDate" className="flex flex-col gap-1.5">
                        <Label className="text-xs font-bold text-blue-900 dark:text-blue-100/80 tracking-widest uppercase px-1">Session Start Date</Label>
                        <Input type="date" className="w-full h-12 px-5 rounded-xl border-2 border-blue-50 dark:border-blue-900/20 bg-blue-50/30 dark:bg-blue-900/10 focus:bg-white dark:focus:bg-[#161e2c] focus:border-blue-500 transition-all outline-none cursor-pointer text-blue-900 dark:text-blue-50" />
                        <FieldError className="text-red-500 dark:text-red-400 text-[11px] font-medium mt-1 ml-1" />
                    </TextField>

                    {/* 10. LOCATION */}
                    <TextField isRequired name="location" className="flex flex-col gap-1.5">
                        <Label className="text-xs font-bold text-blue-900 dark:text-blue-100/80 tracking-widest uppercase px-1">Location (Area/City)</Label>
                        <Input placeholder="e.g. Dhaka, Dhanmondi" className="w-full h-12 px-5 rounded-xl border-2 border-blue-50 dark:border-blue-900/20 bg-blue-50/30 dark:bg-blue-900/10 focus:bg-white dark:focus:bg-[#161e2c] focus:border-blue-500 transition-all outline-none text-blue-900 dark:text-blue-50" />
                        <FieldError className="text-red-500 dark:text-red-400 text-[11px] font-medium mt-1 ml-1" />
                    </TextField>
                </div>

                {/* 11. INSTITUTION & EXPERIENCE */}
                <div className="w-full flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-blue-900 dark:text-blue-100/80 tracking-widest uppercase px-1">Institution & Experience</label>
                    <TextArea isRequired
                        name="experience"
                        rows={3}
                        className="w-full p-5 rounded-xl border-2 border-blue-50 dark:border-blue-900/20 bg-blue-50/30 dark:bg-blue-900/10 focus:bg-white dark:focus:bg-[#161e2c] focus:border-blue-500 transition-all outline-none resize-none text-blue-900 dark:text-blue-50"
                        placeholder="Write institution name and teaching experience..."
                    />
                    <FieldError className="text-red-500 dark:text-red-400 text-[11px] font-medium mt-1 ml-1" />
                </div>

                {/* 12. SUBMIT BUTTON */}
                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                    <Button
                        type="submit"
                        className="w-full h-14 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white font-bold text-lg shadow-[0_8px_25px_rgba(37,99,235,0.25)] transition-all duration-300 uppercase tracking-widest border-none"
                    >
                        Add Tutor Profile
                    </Button>
                </motion.div>

            </Form>
        </motion.div>
    </div>
</section>
        </div>
    );
};

export default AddTutorFrom;