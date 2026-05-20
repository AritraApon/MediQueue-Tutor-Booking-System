"use client";


import {
    Button,
    Input,
    Label,
    Modal,
    Spinner,
    Surface,
    TextField,
} from "@heroui/react";

import { authClient, useSession } from "@/lib/auth-client";

import Image from "next/image";

import { toast } from "react-toastify";
import { Edit } from "lucide-react";




const EditModal = () => {

    const { data, isPending } = useSession();

    if (isPending) {
        return (
            <div className="flex items-center gap-4">
                <Spinner />
            </div>
        );
    }

    const user = data?.user;

    const onSubmit = async (event) => {

        event.preventDefault();

        const formData = new FormData(event.target);

        const userData = Object.fromEntries(formData.entries());

        const { name, image } = userData;

        try {

            await authClient.updateUser({
                name,
                image,
            });

            toast.success("Profile updated");

        } catch (error) {

            toast.error("Something went wrong");

        }
    };

    return (
        <div className="mt-4">

            <Modal>

                <Button
                    variant="secondary"
                    size="lg"
                    className="w-70"
                >
                    <Edit size={18} />
                    Edit Profile
                </Button>

                <Modal.Backdrop>

                    <Modal.Container placement="auto">

                        <Modal.Dialog className="sm:max-w-md">

                            <Modal.CloseTrigger />

                            <Modal.Header className="flex flex-col items-center gap-4">

                                <Modal.Heading>
                                    Update Your Profile
                                </Modal.Heading>

                                <Image
                                    src={
                                        user?.image &&
                                        !user.image.includes("@")
                                            ? user.image
                                            : "/avatar.png"
                                    }
                                    alt={user?.name || "user"}
                                    width={120}
                                    height={120}
                                    className="w-28 h-28 rounded-full object-cover border"
                                />

                            </Modal.Header>

                            <Modal.Body className="p-6">

                                <Surface variant="default">

                                    <form
                                        onSubmit={onSubmit}
                                        className="flex flex-col gap-4"
                                    >

                                        <TextField
                                            defaultValue={user?.name}
                                            className="w-full"
                                            type="text"
                                        >
                                            <Label>Name</Label>

                                            <Input name="name" />
                                        </TextField>

                                        <TextField
                                            defaultValue={user?.image}
                                            className="w-full"
                                            type="text"
                                        >
                                            <Label>Image URL</Label>

                                            <Input name="image" />
                                        </TextField>

                                        <Modal.Footer>

                                            <Button
                                                slot="close"
                                                variant="secondary"
                                            >
                                                Cancel
                                            </Button>

                                            <Button
                                                type="submit"
                                                slot="close"
                                            >
                                                Update
                                            </Button>

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

export default EditModal;