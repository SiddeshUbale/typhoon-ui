import React from "react";
import { Stack, Button } from "components";
import { useToast } from "hooks/useToast";

import Toast from "./Toast";
import { ToastManager } from "./ToastProvider";
import { FocusVisibleManager } from "hooks/useFocusVisible";
import { noop } from "helpers/utils";

export default {
    title: "Molecules/Toast",
    component: Toast,
    decorators: [
        (Story: any) => (
            <ToastManager>
                <Story />
            </ToastManager>
        ),
    ],
};

export const DefaultToast = () => {
    return (
        <FocusVisibleManager>
            <Stack direction="vertical" gap={2}>
                <Toast
                    id="001"
                    heading="Hello world"
                    description="This is a description"
                    variant="info"
                    permanent={true}
                    onCloseToast={noop}
                />
                <Toast
                    id="002"
                    heading="Hello world"
                    description="This is a description"
                    variant="warning"
                    permanent={true}
                />
                <Toast
                    id="003"
                    heading="Hello world"
                    description="This is a description"
                    variant="success"
                    permanent={true}
                />
                <Toast
                    id="004"
                    heading="Hello world"
                    description="This is a description"
                    variant="error"
                    permanent={true}
                />
            </Stack>
        </FocusVisibleManager>
    );
};

export const ToastAutoClose = () => {
    // @ts-ignore
    // Context is in decorator
    const { addToast } = useToast();

    return (
        <Stack>
            <Button
                onClick={() =>
                    addToast({
                        heading: "Hello world",
                        description: "This is a description",
                        variant: "success",
                    })
                }
            >
                Add Toast
            </Button>
        </Stack>
    );
};

export const PermanentToast = () => {
    // @ts-ignore
    // Context is in decorator
    const { addToast } = useToast();

    return (
        <Stack>
            <Button
                onClick={() =>
                    addToast({
                        heading: "Hello world",
                        description: "This is a description",
                        permanent: true,
                        variant: "info",
                    })
                }
            >
                Add Toast
            </Button>
        </Stack>
    );
};

export const ToastWarning = () => {
    // @ts-ignore
    // Context is in decorator
    const { addToast } = useToast();

    return (
        <Stack>
            <Button
                onClick={() =>
                    addToast({
                        heading: "Hello world",
                        description: "This is a description",
                        variant: "warning",
                    })
                }
            >
                Add Toast
            </Button>
        </Stack>
    );
};