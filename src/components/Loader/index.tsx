import { useLoading, BallTriangle } from '@agney/react-loading';

const Loader = () => {
    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        // @ts-ignore
        indicator: <BallTriangle width="50" />,
    });

    return (
    <section className="app__loader" {...containerProps}>
        {indicatorEl}
    </section>
);
}

export default Loader