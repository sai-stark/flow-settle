import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquarePlus } from 'lucide-react';

const Disputes = () => {
  return (
    <div className="flex-1 space-y-6 p-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dispute Management</h1>
          <p className="text-muted-foreground mt-1">
            Track and resolve billing disputes
          </p>
        </div>
        <Button className="bg-gradient-primary">
          <MessageSquarePlus className="mr-2 h-4 w-4" />
          Raise Dispute
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Active Disputes</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Dispute information will be displayed here...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Disputes;
