import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Balance = () => {
  return (
    <div className="flex-1 space-y-6 p-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Balance & Consumption</h1>
          <p className="text-muted-foreground mt-1">
            Monitor your account balance and API usage
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Account Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Balance information will be displayed here...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Balance;
