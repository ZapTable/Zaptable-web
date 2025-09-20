import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type FeatureCardProps = {
    title: string;
    features: string[];
};

export const FeatureCard = ({ title, features }: FeatureCardProps) => {
    return (
        <Card
            sx={{
                maxWidth: 280,
                borderRadius: 4,
                boxShadow: 3,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6,
                },
            }}
        >
            <CardContent sx={{ padding: 3 }}>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: 'text.primary', fontWeight: 600, mb: 2 }}
                >
                    {title}
                </Typography>

                <ul style={{ paddingLeft: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {features.map((feature, index) => (
                        <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <CheckCircleIcon sx={{ color: 'green', fontSize: 20 }} />
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {feature}
                            </Typography>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
};
