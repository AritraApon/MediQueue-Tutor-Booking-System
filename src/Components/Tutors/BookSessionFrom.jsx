"use client";
import { useSession } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const BookSessionFrom = ({ tutor }) => {
const { data: session } = useSession();
 const user = session?.user;

    return (
        <div>
            <Modal>
                <Button className="w-full mt-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-[0_10px_25px_-5px_rgba(37,99,235,0.4)] transition-all active:scale-95 flex items-center justify-center gap-2 uppercase tracking-widest text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                    Book Session Now
                </Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Heading className="text-2xl text-center">Book Session</Modal.Heading>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form className="flex flex-col gap-4">
                                        {/* Name  */}
                                        <TextField className="w-full" name="name" type="text">
                                            <Label>Student Name</Label>
                                            <Input placeholder="Enter your name" />
                                        </TextField>

                                        {/* phone  */}
                                        <TextField className="w-full" name="phone" type="tel">
                                            <Label>Phone</Label>
                                            <Input placeholder="Enter your phone number" />
                                        </TextField>

                                         {/*Tutor Name  */}
                                        <TextField defaultValue={tutor.tutorName} className="w-full" name="name" type="text">
                                            <Label>Tutor Name</Label>
                                            <Input placeholder="Enter your name" />
                                        </TextField>

                                        {/* email  */}
                                        <TextField defaultValue={user?.email} className="w-full" name="email" type="email">
                                            <Label>Student Email</Label>
                                            <Input placeholder="Enter your email" />
                                        </TextField>
                                        <Modal.Footer>
                                            <Button slot="close" variant="secondary">
                                                Cancel
                                            </Button>
                                            <Button type="submit" slot="close">Conform Booking</Button>
                                        </Modal.Footer>
                                    </form>
                                </Surface>
                            </Modal.Body>

                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>

        </div>
    );
};

export default BookSessionFrom;