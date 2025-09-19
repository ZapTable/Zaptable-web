import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

type Feature = {
  label: string;
  enabled: boolean;
};

type PricingCardProps = {
  title: string;
  price: string;
  description: string;
  buttonText: string;
  features: Feature[];
  
};

export const PricingCard = ({
  title,
  price,
  description,
  buttonText,
  features,
}: PricingCardProps) => {
  return (
    <Card sx={{ maxWidth: 360, borderRadius: 4, boxShadow: 3 }}>
      {/* Card Content */}
      <CardContent>
        {/* Plan name */}
        <Typography
          gutterBottom
          variant="subtitle1"
          sx={{ fontWeight: 600, color: 'text.primary' }}
        >
          {title}
        </Typography>

        {/* Price row */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
          <Typography variant="h3" sx={{ fontWeight: 700, color: 'text.primary' }}>
            {price}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            per month
          </Typography>
        </div>
      </CardContent>

      {/* Button section */}
      <div className="px-4 py-3 text-center rounded-lg">
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: 'var(--color-brand-light)',
            color: 'black',
            boxShadow: 'none',
            textTransform: 'none',
            fontWeight: 500,
            borderRadius: '12px',
            '&:hover': {
              backgroundColor: 'var(--color-brand-gray)',
              color: 'white',
            },
          }}
        >
          {buttonText}
        </Button>
      </div>

      <Divider />

      {/* Features list */}
      <CardContent>
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}
        >
          FEATURES
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
          {description}
        </Typography>

        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-2 mb-2 ${
              feature.enabled ? 'text-black' : 'text-gray-400'
            }`}
          >
            {feature.enabled ? (
              <CheckCircleIcon fontSize="small" />
            ) : (
              <RadioButtonUncheckedIcon fontSize="small" />
            )}
            <span>{feature.label}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
